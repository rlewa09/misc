

public class KMP {

    private static void KMPSearch(String p, String s) {
        int n = s.length();
        int m = p.length();
        int[] pat = new int[m];
        int j = 0;
        computePat(pat, m, p);

        int i=0;
        while(i<n) {
            if(p.charAt(j) == s.charAt(i)) {
                i++;
                j++;
            }

            if(j == m) {
                System.out.println("Patten matched");
                j = pat[j-1];
            } else if(i<n && s.charAt(i) != p.charAt(j)) {
                if(j == 0) {
                    i++;
                } else {
                    j = pat[j-1];
                }
            }
        }
    }

    private static void computePat(int[] pat, int m, String p) {
        int len = 0;
        pat[0] = 0;
        int i=1;
        while(i < m) {
            if(p.charAt(i) == p.charAt(len)) {
                len++;
                pat[i] = len;
                i++;
            } else {
                if(len != 0) len = pat[len-1];
                else {
                    pat[i] = len;
                    i++;
                }
            }
        }
    }

    public static void main(String[] args) {
        String txt = "ABABDABACDABABCABAB";
        String pat = "ABABCABAB";
        new KMP().KMPSearch(pat, txt);
    }
}
