module.exports = function(client) {
    const getCarmodels = async () => {
        const { rows: carmodels } = await client.query(`SELECT * FROM carmodels ORDER BY id`);
        return carmodels;
    };

    const getCarmodel = async (id) => {
        const { rows } = await client.query(`SELECT * FROM carmodels WHERE id = $1`, [id]);
        return rows[0];
    };

    const createCarmodel = async ({ brand, model, price }) => {
        const { rows } = await client.query(
            `INSERT INTO carmodels(brand, model, price) VALUES ($1, $2, $3) RETURNING *`,
            [brand, model, price]
        );
        return rows[0];
    };

    const carmodelExists = async (id) => {
        const { rowCount } = await client.query(
            `SELECT id FROM carmodels where id = $1`, [id]
        );
        return rowCount > 0;
    }

    const updateCarmodel = async ({ id, brand, model, price }) => {
        const { rows } = await client.query(`
            UPDATE carmodels
            SET brand = $2, model = $3, price = $4
            WHERE id = $1
            RETURNING *`,
            [id, brand, model, price]
        );
        return rows[0];
    }

    const deleteCarmodel = async (id) => {
        const { rowCount } = await client.query(`DELETE FROM carmodels WHERE id = $1`, [id]);
        return rowCount > 0;
    }

    // Public interface
    return {
        getCarmodels,
        getCarmodel,
        createCarmodel,
        carmodelExists,
        updateCarmodel,
        deleteCarmodel,
    };
};