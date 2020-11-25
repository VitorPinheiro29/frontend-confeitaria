import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import api from '../../services/api.js';
import counterpart from "counterpart";
import Translate from "react-translate-component";

import './styles.css';

import Upload from '../../components/Uploads';
import NavBar from '../../components/NavBar';
import FileList from '../../components/FileList';
import Footer from '../../components/Footer';

import pt from "../../utils/languages/pt";
import en from "../../utils/languages/en";

counterpart.registerTranslations("pt", pt);
counterpart.registerTranslations("en", en);

counterpart.setLocale("pt");

const CreateRecipe = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);


  function handleUpload(files) {
    const zeFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles(uploadedFiles.concat(zeFiles));
  }

  /*function updateFile(id, data) {
    setUploadedFiles({
      zeFiles: updateFile.zeFiles.map((zeFile) => {
        return id === zeFile.id ? { ...zeFile, ...data } : zeFile;
      }),
    });
  }

  function processUpload(zeFiles) {
    const data = new FormData();

    data.append('file', zeFiles.file, zeFiles.name);

    api.post('posts', data, {
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        updateFile(zeFiles.id, {
          progress,
        });
      },
    });
  }*/

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  // const [selectedFile, setSelectedFile] = useState('');
  const history = useHistory(); /*guarda os dados */

  async function postRecipe(e) {
    e.preventDefault();

    try {
      const data = {
        title,
        description,
        ingredients,
        preparation,
      };

      const response = await api.post('/recipe/register-recipe', data);

      localStorage.setItem('recipeTitle', title);
      localStorage.setItem('recipeDescription', description);
      localStorage.setItem('recipeList', ingredients);
      localStorage.setItem('recipePreparation', preparation);

      history.push('/');
    } catch (err) {
      alert('Falha ao cadastrar a receita, tente novamente');
    }
  }

  const userName = localStorage.getItem('userName');
  return (
    <div id="create-recipe">
      <NavBar children={userName} />

      {/*<img src={logoImg} alt="Be The Hero" /> */}

      <form onSubmit={postRecipe} className="form-container">
        <div className="post-recipe-container">
          <div className="bg-title">
            <h1 className="title"><Translate content="createRecipeTitle" /></h1>
          </div>

          <div className="grid-one">
            <div className="title-input-container">
              <h1 className="title-style"><Translate content="recipeTitle" /></h1>
              <input
                placeholder="Título da receita"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-title-recipe"
              />
            </div>

            <div className="title-input-container">
              <h1 className="title-style"><Translate content="recipeDescription" /></h1>
              <input
                placeholder="Breve descrição da receita"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-title-recipe"
              />
            </div>
            <div className="dropzone-container">
              <h1 className="dropzone-title-style"><Translate content="recipeImage" /></h1>
              <Upload onUpload={handleUpload} />
              {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
            </div>

            <div className="ingredient-input-container">
              <h1 className="title-style"><Translate content="recipeIngredients" /></h1>
              <textarea
                placeholder="Ingredientes da receita"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="input-ingredient"
              />
            </div>
            <div className="ingredient-input-container">
              <h1 className="title-style"><Translate content="recipePrepare" /></h1>
              <textarea
                placeholder="Modo de preparo"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                className="input-ingredient"
              />
            </div>
            <div className="bg-button-container">
              <button className="button" type="submit">
                <Translate content="sendRecipe" />
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default CreateRecipe;
