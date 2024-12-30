import DocumentDisplay from '../../../Components/main/DocumentDisplay';
import LightDocumentDisplay from '../../../Components/main/LightDocumentDisplay';
import MainPagesWrapper from '../../../Components/main/MainPagesWrapper'
import { Document, LightDocument } from '../../../Types/types';

const SingleTeacherDocuments = () => {
  const fakeFile = new File(["content"], "example.txt", { type: "text/plain" });

  const fakeDocuments: Document[] = [
    {
      id: "1",
      subject: "Logique",
      senderName: "John Doe",
      title: "My First Document",
      description: "This is a description of my first document.",
      file: fakeFile,
      senderId: "user-123",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      subject: "Logique",
      senderName: "John Doe",
      title: "My First Document",
      description: "This is a description of my first document.",
      file: fakeFile,
      senderId: "user-123",
      createdAt: new Date().toISOString(),
    },
  ];
  const lightDoc = fakeDocuments[0] as LightDocument;
  return (
    <MainPagesWrapper subTitle='Tout ce dont vous avez besoin pour réussir vos cours' title='Ressources Pédagogiques'>
      <div>
        <div className='flex justify-center items-center'>
          <LightDocumentDisplay doc={lightDoc} />
        </div>
        <div className='rounded-xl border-2 border-ternary-color py-4 w-10/12 mx-auto flex flex-col gap-4'>
          {
            fakeDocuments.map((doc) => <DocumentDisplay doc={doc} />)
          }
        </div>
      </div>
    </MainPagesWrapper>
  )
}

export default SingleTeacherDocuments