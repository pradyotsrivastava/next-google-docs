import { Editor } from "../editor";
import Toolbar from "../toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div>
      <div>DocumentIdPage: {documentId}</div>
      <div>
        <Toolbar />
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
