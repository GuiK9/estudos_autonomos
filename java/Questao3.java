public class Questao3 {
    public static void main(String[] args) {
        double saldoMedio = 421.58;
        double credito = 0;

        if(saldoMedio < 0 | saldoMedio < 200 ){
            credito = saldoMedio * 0.1;
        } else if( saldoMedio < 400 ){
            credito = saldoMedio * 0.15; 
        } else if( saldoMedio < 800) {
            credito = saldoMedio * 0.2;
        } else if(saldoMedio <1600){
            credito = saldoMedio * 0.25;
        } else if(saldoMedio > 1600){
            credito = saldoMedio * 0.30;
        }

        System.err.println(credito);
    }
}
