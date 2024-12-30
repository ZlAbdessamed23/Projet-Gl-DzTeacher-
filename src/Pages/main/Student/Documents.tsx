import LightDocumentDisplay from '../../../Components/main/LightDocumentDisplay';
import MainPagesWrapper from '../../../Components/main/MainPagesWrapper'
import { LightDocument } from '../../../Types/types';

const Documents = () => {

    const documents : LightDocument[] = [
        {
            id : "00",
            senderName : "Mr Azouaou",
            subject : "Gl"
        },
        {
            id : "01",
            senderName : "Mr Azouaou",
            subject : "Gl"
        },
        {
            id : "02",
            senderName : "Mr Azouaou",
            subject : "Gl"
        },
    ];

  return (
    <MainPagesWrapper subTitle='Tout ce dont vous avez besoin pour réussir vos cours' title='Ressources Pédagogiques'>
        <div className='w-full flex flex-col items-center gap-4'>
            {
                documents.map((doc) => <LightDocumentDisplay doc={doc} key={doc.id} />)
            }
        </div>  
    </MainPagesWrapper>
  )
};

export default Documents