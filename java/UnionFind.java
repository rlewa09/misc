// UnionFind.class
class UnionFindUtility {
    private int[] root;

    public UnionFindUtility(int size) {
        root = new int[size];
        for (int i = 0; i < size; i++) {
            root[i] = i;
        }
    }

    public int find(int x) {
        return root[x];
    }

    public void union(int x, int y) {
        int rootx = root[x];
        int rooty = root[y];
        if(rootx != rooty) {
            for(int i=0; i<root.length; i++) {
                if(rooty == root[i]) {
                    root[i] = rootx;
                }
            }
        }
    }

    public boolean connected(int x, int y) {
        return root[x] == root[y];
    }
}

// App.java
// Test Case
public class UnionFind {
    public static void main(String[] args) throws Exception {
        UnionFindUtility uf = new UnionFindUtility(10);
        // 1-2-5-6-7 3-8-9 4
        uf.union(1, 2);
        uf.union(2, 5);
        uf.union(5, 6);
        uf.union(6, 7);
        uf.union(3, 8);
        uf.union(8, 9);
        System.out.println(uf.connected(1, 5)); // true
        System.out.println(uf.connected(5, 7)); // true
        System.out.println(uf.connected(4, 9)); // false
        // 1-2-5-6-7 3-8-9-4
        uf.union(9, 4);
        System.out.println(uf.connected(4, 9)); // true
    }
}