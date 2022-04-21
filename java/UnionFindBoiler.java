import java.util.Arrays;

public class UnionFindBoiler {
    int[] root;
    int[] rank;

    public void UnionFind(int n) {
        root = new int[n];
        rank = new int[n];
        for(int i=0; i<n; i++) {
            root[i] = i;
            rank[i] = 1;
        }
    }

    public int find(int x) {
        if(x == root[x]) return x;
        return root[x] = find(root[x]);
    }

    public void union(int x, int y) {
        int findX = find(x);
        int findY = find(y);
        if(rank[findX] > rank[findY]) {
            root[findY] = findX;
        } else if(rank[findX] < rank[findY]) {
            root[findX] = findY;
        } else {
            root[findY] = findX;
            rank[findX]++;
        }
    }

    public int noOfConnected(int n) {
        // Set<Integer> set = new HashSet<>();
        for(int i=1; i<n; i++) {
            if(find(i) != find(i-1)) {
                return 2;
            }
        }
        return 1;
    }

    public int earliestAcq(int[][] logs, int n) {
        int m = logs.length;
        if(m < n-1) {
            return -1;
        }
        UnionFind(n);
        Arrays.sort(logs, (l1, l2) -> l1[0]-l2[0]);
        for(int i=0; i<m; i++) {
            union(logs[i][1], logs[i][2]);
            if(noOfConnected(n) == 1) {
                return logs[i][0];
            }
        }
        return -1;
    }
}