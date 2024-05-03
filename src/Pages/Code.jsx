import { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { useLocation } from "react-router-dom";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

export default function Code() {
  const location = useLocation();
  let content = location.state?.props;
  const [code, setCode] = useState("");

  const extractCode = (code) => {
    const match = code.match(/```\w*\n([\s\S]*?)\n```/);
    return match ? match[1].trim() : "";
  };

  useEffect(() => {
    const tempCode = extractCode(content);
    setCode(tempCode);
  }, [content]);

  return (
    <div className="CodeScreen">
      <h1>코드</h1>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
      />
      <SandpackProvider
        template="react"
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        files={{
          "App.js": code,
        }}
      >
        <SandpackLayout>
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
