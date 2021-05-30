import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import GroupDiv from './Group';

interface Group {
    description: string;
    image: string;
    to: string;
}

interface State {
    createGroup: boolean;
    selectableSites: string[];
    selectedSites: string[];
}

function Home() {

    const description = useRef<HTMLInputElement>(null);
    const image = useRef<HTMLInputElement>(null);

    const [state, setState] = useState<State>({
        createGroup: false,
        selectableSites: [],
        selectedSites: [],
    });

    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        setState({
            ...state,
            selectableSites: ["A", "B", "C", "D", "E"],
            selectedSites: [],
        });

        setGroups([
            {
                description: "Descrição 1",
                image: "",
                to: "test 1",
            },
            {
                description: "Descrição 2",
                image: "",
                to: "test 2",
            }
        ]);
    }, []);

    function toggleNewGroup() {

        setState({
            ...state,
            createGroup: !state.createGroup,
        });
    }

    return (
        <section className="content">
            <h1 className="content__title">Escolha o seu grupo</h1>
            <div className="groups">
                <div className="card-1 groups__group" title="Adicionar novo grupo" onClick={toggleNewGroup}>
                    <i className="fas fa-plus groups__group__add"></i>
                </div>
                {
                    groups.map(group => <GroupDiv description={group.description} image={group.image} to={group.to} key={Math.random()} />)
                }
            </div>
            {state.createGroup &&
                <div className="groups new-group">
                    <header className="new-group__header">
                        <h2 className="new-group__header__title">Novo grupo</h2>
                        <div className="open-button-1 new-group__header__close"><span onClick={toggleNewGroup}>X</span></div>
                    </header>
                    <form className="form-1 new-group__form">
                        <div>
                            <div>
                                <input placeholder="Descrição" ref={description} />
                            </div>
                            <div>
                                <input placeholder="Imagem" ref={image} />
                            </div>
                        </div>
                        <div>
                            <button className=" open-button-1 new-group__form__button" onClick={
                                () => {
                                    const descriptionValue = description.current?.value;
                                    const imageValue = image.current?.value;
                                    const selectedSites = state.selectedSites;

                                    const requestBody = {
                                        descriptionValue,
                                        imageValue,
                                        selectedSites,
                                    };

                                    console.log(requestBody);

                                    const response: Group =
                                    {
                                        description: requestBody.descriptionValue || "",
                                        image: requestBody.imageValue || "",
                                        to: "test 1",
                                    };

                                    setGroups([...groups, response]);

                                    toggleNewGroup();
                                }
                            }>Salvar</button>
                        </div>
                    </form>
                </div>
            }
        </section>
    );
}

export default Home;