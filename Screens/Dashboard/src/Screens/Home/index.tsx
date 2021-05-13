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
            selectableSites: ["A", "B", "C", "D", "E"],
            selectedSites: [],
        });
    }

    return (
        <section className="content">
            <h1>Escolha o seu grupo</h1>
            <div className="groups">
                <div className="card-1 groups__group" title="Adicionar novo grupo" onClick={toggleNewGroup}>
                    <i className="fas fa-plus groups__group__add"></i>
                </div>
                {
                    groups.map(group => <GroupDiv description={group.description} image={group.image} to={group.to} key={Math.random()} />)
                }
            </div>
            {state.createGroup &&
                <div className="new-group">
                    <div className="new-group__close"><span onClick={toggleNewGroup}>X</span></div>
                    <form>
                        <div>
                            <label htmlFor="description">Descrição</label>
                            <input id="description" ref={description} />
                        </div>
                        <div>
                            <label htmlFor="image">Imagem</label>
                            <input id="image" ref={image} />
                        </div>
                        <div>
                            <div><label htmlFor="description">Sites</label><button>Novo site</button></div>
                            <select multiple={true} >
                                <option disabled={true} >Selecione os sites:</option>
                                {state.selectableSites.map(site =>
                                    <option key={site} onClick={() => {
                                        setState({
                                            ...state,
                                            selectableSites: state.selectableSites.filter(element => element !== site),
                                            selectedSites: [...state.selectedSites, site]
                                        })
                                    }}>{site}</option>
                                )}
                            </select>
                            {state.selectedSites.map(site =>
                                <div key={site} >{site} <span onClick={() => {
                                    setState({
                                        ...state,
                                        selectedSites: state.selectedSites.filter(element => element !== site),
                                        selectableSites: [...state.selectableSites, site]
                                    })
                                }}>X</span></div>
                            )}
                        </div>
                        <div>
                            <button onClick={
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