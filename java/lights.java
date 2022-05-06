import java.util.*;
import java.lang.*;
import java.io.*;

public class lights {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = 0;
        t = scn.nextInt();

        for(int p=0; p<t; p++) {
            int n;
            n = scn.nextInt();
            int[] A = new int[n];
            int B;
            for(int i=0; i<n; i++) {
                A[i] = scn.nextInt();
            }
            B = scn.nextInt();
            solve(A,B,n);
        }
    }

    private static void solve(int[] A, int B, int n) {
        int i = Math.min(B-1, n-1);
        int count = 0;

        while(i<n) {
            if(A[i] == 1) {
                A[i] = 2;
                count++;
                i += B;
                if(i >= n) break;
                i = Math.min(n-1, i+B-1);
            } else if(A[i] == 2) {
                break;
            } else {
                i--;
            }
        }

        if(i < n-1) {
            System.out.println(-1);
            return;
        }
        System.out.println(count);
    }
}
