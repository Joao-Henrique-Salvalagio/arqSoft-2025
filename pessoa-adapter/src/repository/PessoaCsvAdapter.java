package repository;

import model.Pessoa;
import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class PessoaCsvAdapter implements RepositorioDePessoas {
    private String caminhoCsv;

    public PessoaCsvAdapter(String caminhoCsv) {
        this.caminhoCsv = caminhoCsv;
    }

    @Override
    public List<Pessoa> listarPessoas() {
        List<Pessoa> pessoas = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(caminhoCsv))) {
            String linha;
            boolean primeiraLinha = true;

            while ((linha = br.readLine()) != null) {
                if (primeiraLinha) {
                    primeiraLinha = false;
                    continue;
                }

                String[] campos = linha.split(",");
                String nome = campos[0].trim();
                int idade = Integer.parseInt(campos[1].trim());
                String email = campos[2].trim();

                pessoas.add(new Pessoa(nome, idade, email));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return pessoas;
    }
}