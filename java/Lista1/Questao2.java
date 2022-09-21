public class Questao2 {
    public static void main(String[] args) {
        double nota1 = 819.30 * 3;
        double nota2 = 651.30 * 2;
        double nota3 = 591.10 * 2;
        double nota4 = 700.0 * 2;
        double nota5 = 647.30;

        double media = (nota1 + nota2 + nota3 + nota4 + nota5) / 10;

        if(nota3 < 200) {
            media = -1;
        }

        System.err.println(media);

    }
}
