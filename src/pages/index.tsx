import type { GetStaticProps, NextPage } from "next";
import client from "../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { ComponentProps, useState } from "react";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearch(json);
    console.log(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <div>
      <form className="flex gap-x-2" onSubmit={handleSubmit}>
        <input type="text" name="query" className="border border-black px-2" />
        <button className="border border-black px-2">検索</button>
        <button type="reset" className="border border-black px-2">
          リセット
        </button>
      </form>

      <p className="mt-4 text-gray-400">{`${
        search ? "検索結果" : "記事の総数"
      }: ${totalCount}件`}</p>

      <ul className="mt-4 space-y-4">
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link
                href={`/blog/${content.id}`}
                className="text-xl text-blue-800 underline hover:text-blue-400"
              >
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Home;
