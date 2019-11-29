package com.mySquire.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Service
public class DataSetUrlService {
    @Autowired
    DataSetUrlService service;
    private Client client = ClientBuilder.newClient();

    //pour le moment je n'est pas encore cree le service pour ASK.elle sera indentique a celle si .si on parvien a prend la requete en parametre
    public String endpointDataUrlService(String query) throws UnsupportedEncodingException {
//        String params = URLEncoder.encode("SELECT DISTINCT ?s ?p ?o WHERE {?s ?p ?o.} LIMIT 1", "UTF-8");
        String params = URLEncoder.encode(query, "UTF-8");
        String REST_URI = "http://opendatacommunities.org/sparql.json?query=" + params;
        return client
                .target(REST_URI)
//                .path(String.valueOf(id))
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);
    }


}
