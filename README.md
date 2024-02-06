# loteria.json

[![Run Script](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml/badge.svg)](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml)

Todos os resultados atualizados e analisados das loterias da Caixa Econômica Federal em arquivos JSON. A atualização dos arquivos são feitas automaticamente, todos os dias, com Cron Job via GitHub Actions.

Últimos sorteios registrados:

 - **Dia de Sorte**: <!--diadesorte-->871 => 07, 11, 04, 25, 02, 29, 03, Janeiro
 - **Dupla Sena**: <!--duplasena-->2.625 => 43, 24, 42, 37, 05, 46, 35, 05, 20, 46, 32, 16
 - **Federal**: <!--federal-->5.838 => 050122, 067723, 065087, 016875, 062072
 - **Lotofácil**: <!--lotofacil-->3.021 => 04, 25, 23, 19, 24, 20, 14, 05, 07, 10, 12, 08, 11, 13, 02
 - **Lotomania**: <!--lotomania-->2.580 => 59, 02, 90, 03, 01, 70, 46, 78, 94, 54, 61, 47, 43, 83, 00, 87, 19, 05, 88, 85
 - **+Milionária**: <!--maismilionaria-->118 => 14, 41, 38, 25, 36, 37, 04, 06
 - **Mega Sena**: <!--megasena-->2.684 => 26, 45, 53, 48, 46, 17
 - **Quina**: <!--quina-->6.358 => 46, 52, 04, 48, 11
 - **Super Sete**: <!--supersete-->503 => 1, 8, 4, 4, 3, 0, 9
 - **Timemania**: <!--timemania-->2.050 => 66, 44, 62, 43, 07, 74, 49, SAOBENTO/SP
 <!-- - **Loteca**: 0 -->

## Sorteios

Os arquivos de sorteios que estão na pasta *data* contém um *object* no seguinte formato: suas **chaves** são formadas pelos **números dos sorteios** e os **valores** contém um **array com as dezenas sorteadas por ordem de sorteio**.

### Formato:

```
{ [key in number]: Array<number | string> }
```

### Acesso

Obtenha os dados via GET nos seguintes *endpoints*:

 - **Dia de Sorte**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/diadesorte.json
 - **Dupla Sena**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/duplasena.json
 - **Federal**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/federal.json
 - **Lotofácil**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/lotofacil.json
 - **Lotomania**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/lotomania.json
 - **+Milionária**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/maismilionaria.json
 - **Mega Sena**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/megasena.json
 - **Quina**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/quina.json
 - **Super Sete**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/supersete.json
 - **Timemania**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/timemania.json
 <!-- - **Loteca**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/loteca.json -->
 
## Análises

Algumas análises dos resultados são realizadas e salvas na pasta *data*, com extensão *.analytic.json*, que contém um *object* no seguinte formato:
 - A **chave *ones***: informa a quantidade de números sorteados de acordo com o seu grupo de **unidade**.
 - A **chave *tens***: informa a quantidade de números sorteados de acordo com o seu grupo de **dezena**.
 - A **chave *sums***: informa a quantidade de sorteios de acordo com a **soma** de seus números.
 - A **chave *mean***: informa a quantidade de sorteios de acordo com a **média** arredondada de seus números.
 - A **chave *pairs***: informa a quantidade de sorteios de acordo com a quantidade de números **pares**.
 - A **chave *primes***: informa a quantidade de sorteios de acordo com a quantidade de números **primos**.
 - A **chave *quantity***: informa a quantidade de **vezes** que um número foi sorteado.
 - A **chave *sequential***: informa a quantidade de vezes que um número foi sorteado de acordo com a **ordem** de sorteio.

### Formato

```
{
    ones       : { [key in string] : number };
    tens       : { [key in string] : number };
    sums       : { [key in string] : number };
    mean       : { [key in string] : number };
    pairs      : { [key in string] : number };
    primes     : { [key in string] : number };
    quantity   : { [key in string] : number };
    sequential : Array<{ [key in string] : number }>;
}
```

### Acesso

Obtenha as análises via GET nos seguintes *endpoints*:

 - **Dia de Sorte**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/diadesorte.analytic.json
 - **Dupla Sena**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/duplasena.analytic.json
 - **Lotofácil**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/lotofacil.analytic.json
 - **Lotomania**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/lotomania.analytic.json
 - **+Milionária**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/maismilionaria.analytic.json
 - **Mega Sena**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/megasena.analytic.json
 - **Quina**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/quina.analytic.json
 - **Super Sete**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/supersete.analytic.json
 - **Timemania**: https://raw.githubusercontent.com/w7br/loteria.json/master/data/timemania.analytic.json

## Projetos que utilizam estes dados

 - **Analisador de Jogos da Lotofácil**: https://github.com/w7br/lotofacil/

## Autor

* **Guilherme Neves** - [github](https://github.com/w7br/) - [website](https://allexus.dev.br/)

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/w7br/loteria.json/blob/master/LICENSE) para detalhes.
