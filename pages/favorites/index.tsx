import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Card, Grid } from '@nextui-org/react';


import { NoFavorites } from '../../components/ui';
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {
   
    const [favoritePokemons, setFavoritesPokemons] = useState<number[]>([])

    useEffect(() => {

        setFavoritesPokemons( localFavorites.pokemons() );

    }, [])

    return (
        <Layout title="Favoritos">

            {
                favoritePokemons.length === 0 
                    ? ( <NoFavorites />)
                    : ( <FavoritePokemons pokemons={favoritePokemons}/>)
            }

        </Layout>
    )
}

export default FavoritesPage;