import { getPostBySlug } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import TwoColumn from "components/two-column";
import ConvertBody from "components/convert-body";
import PostCategories from "components/post-categories";
import Image from "next/image";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.ult}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumn.Main>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumn.Main>
          <TwoColumn.Sidebar>
            <PostCategories categories={categories} />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = "schedule";

  const post = await getPostBySlug(slug);
  console.log("~~~~~~ post ~~~~~");
  console.log(post);
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}
