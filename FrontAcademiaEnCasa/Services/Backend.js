import axios from 'axios';

class Backend {
    async getStudent() {
        try {
            const respuesta = await axios.get('http://localhost:5094/api/students');
            return respuesta.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default Backend;