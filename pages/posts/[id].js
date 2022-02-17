import React from 'react';
import Alert from '../../components/common/Content/Alert';
import Author from '../../components/common/Content/Author';
import Blockquote from '../../components/common/Content/Blockquote';
import Figure from '../../components/common/Content/Figure';
import H1 from '../../components/common/Content/H1';
import H2 from '../../components/common/Content/H2';
import H3 from '../../components/common/Content/H3';
import H4 from '../../components/common/Content/H4';
import Mark from '../../components/common/Content/Mark';
import Paragraph from '../../components/common/Content/Paragraph';
import Unordered from '../../components/common/Content/Unordered';
import Youtube from '../../components/common/Content/Youtube';
import LayoutContent from '../../components/common/Layout/LayoutContent';
import Anchor from '../../components/common/Content/Anchor';
import BlockCode from '../../components/common/Content/BlockCode';
import BlockEquation from '../../components/common/Content/BlockEquation';
import InlineEquation from '../../components/common/Content/InlineEquation';
import parse from 'html-react-parser';
import ReactDOMServer from 'react-dom/server';
import InlineCode from '../../components/common/Content/InlineCode';

function newpost(props) {
  const code1 = `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>`;

  const post = <div>
    <div className="transition max-w-6xl mx-auto ease-in duration-150 w-full p-3 lg:mb-5">
      <div className="aspect-w-2 aspect-h-1">
        <img className="object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1" alt="" />
      </div>
    </div>

    <div className=" w-full max-w-4xl p-3 pt-0 mx-auto">
      <Paragraph>Lorem ipsum dolor sit amet <InlineCode>consectetur</InlineCode> adipisicing elit. <InlineEquation>{"\\int_0^\\infty x^2 dx"}</InlineEquation> Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>
      
      <BlockEquation caption="Phương trình bậc 2">{"\\int_0^\\infty x^2 dx"}</BlockEquation>
      
      <Blockquote fontWeight="normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita inventore itaque modi explicabo adipisci. Laborum animi iure qui reprehenderit.
      </Blockquote>

      <H1>tran dong ba</H1>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>

      <H2>tran dong ba</H2>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>

      <H3>tran dong ba</H3>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>

      <H4>tran dong ba</H4>
      <Paragraph>Lorem ipsum <Mark>dolor</Mark> sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto:</Paragraph>

      <Unordered>
        <li>Toi nen lam <Mark color="red">Item 1</Mark> gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day gi tiep theo day</li>
        <li>Item 2</li>
        <li>Item 2</li>
        <li>Item 2</li>
      </Unordered>

      <Paragraph>Lorem ipsum <Anchor color="red" href="https://editorjs.io/">Editor.js</Anchor> amet <Mark>consectetur adipisicing elit</Mark>. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto.</Paragraph>

      <Figure src="https://images.unsplash.com/photo-1632429966927-12c46c16f130?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" caption="This is caption of image"></Figure>
      <Paragraph>Lorem ipsum <Mark>dolor</Mark> sit amet consectetur adipisicing elit. Cumque suscipit deleniti voluptatum veniam laboriosam voluptate nulla veritatis. Optio qui sit ipsum quo asperiores alias officia officiis rem autem totam vero, similique sapiente cupiditate ratione dolores accusantium neque doloremque? Eum, iusto:</Paragraph>

      <Blockquote border="red" fontWeight="bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita inventore itaque modi explicabo adipisci. Laborum animi iure qui reprehenderit.
        <Author fontWeight="semibold">Tran Dong Ba</Author>
      </Blockquote>

      <Blockquote border="yellow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita inventore itaque modi explicabo adipisci. Laborum animi iure qui reprehenderit.
        <Author>Tran Dong Ba</Author>
      </Blockquote>

      <Youtube src="https://www.youtube.com/embed/UarNfSZR6qg" caption="This is a video on Youtube"></Youtube>

      <Alert color="yellow" icon="warning">
        Day la noi dung <i>can nam vung</i> truoc khi di toi phan tiep theo!Day la noi dung <i>can nam vung</i> truoc khi di toi phan tiep theo! Day la noi dung <i>can nam vung</i> truoc khi di toi phan tiep theo!
      </Alert>

      <BlockCode language="bash">
        {code1}
      </BlockCode>

      <Anchor>
        <Alert icon="warning">
          Day la can nam vung truoc khi di toi phan tiep theo!
        </Alert>
      </Anchor>
    </div>
  </div>;

  const parsed = ReactDOMServer.renderToString(post);

  return (
    <LayoutContent title="Read Post" icon="book">
      {/* {parse(parsed)} */}
      {post}
    </LayoutContent>
  );
}

export default newpost;