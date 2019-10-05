import React from 'react';

import PageTemplate from '../components/page-template';

const user = ({ match }) => <PageTemplate>
    <section className="user">
        <table border="1" style={{width: '100%', borderCollapse: 'collapse'}}>
            <tr>
                <td><strong>Name</strong></td>
                <td>{match.params.name}</td>
            </tr>
            <tr>
                <td><strong>Gender</strong></td>
                <td>{match.params.gender}</td>
            </tr>
            <tr>
                <td><strong>City</strong></td>
                <td>{match.params.city}</td>
            </tr>
        </table>
    </section>
</PageTemplate>

export default user;