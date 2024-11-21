import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import Pre from "./pre";

import "katex/dist/katex.min.css";

interface Props {
  text: string;
}

const Markdwon = ({ text }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      className="markdown w-full break-words"
      components={{
        h1: ({ node, ...props }) => (
          <h2 {...props} id={node?.position?.start.line.toString()} />
        ),
        h2: ({ node, ...props }) => (
          <h3 {...props} id={node?.position?.start.line.toString()} />
        ),
        h3: ({ node, ...props }) => (
          <h4 {...props} id={node?.position?.start.line.toString()} />
        ),
        img: ({ node, ...props }) => (
          <img {...props} src={`/images/${props.src}`} alt={props.alt} />
        ),
        pre: Pre,
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

export default Markdwon;
