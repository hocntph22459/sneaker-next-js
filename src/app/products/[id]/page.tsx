import { Carousel, Image, } from 'antd'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

type Props = {
  params: {
    id: string
  }
}
// const MyFormItemContext = createContext<(string | number)[]>([]);
// function toArr(str: string | number | (string | number)[]): (string | number)[] {
//     return Array.isArray(str) ? str : [str];
// }
// const MyFormItem = ({ name, ...props }: FormItemProps) => {
//     const prefixPath = useContext(MyFormItemContext);
//     const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
//     return <Form.Item name={concatName} {...props} />;
// };
const ProductDetailPage = async ({ params }: Props) => {
  const { data } = await axios.get(`http://localhost:8080/api/products/${params.id}`)
  console.log(data)
  return (
    <div>
      <h1 className='my-[500px] text-[red]'> {data.price}</h1>
     
    </div>
   
  )
}


export default ProductDetailPage