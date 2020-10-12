package DAO;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

/**
 *
 * @author Aniquila
 */
public class Conexion {

    

    static String user="supervisor";
    static String pass="12345";
    static String driver="com.microsoft.sqlserver.jdbc.SQLServerDriver";
    static String url="jdbc:sqlserver://localhost:1433;databaseName=FOODTRUCKS";
    

    public static Connection getConecion() {
        Connection con = null;
        try {
            Class.forName(driver);
            con = DriverManager.getConnection(url, user, pass);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return con;
    }

    

    public void Cerrar1(Connection con, CallableStatement cstm) {
        try {
            if (con != null) {
                con.close();
            }
            if (cstm != null) {
                cstm.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void Cerrar2(CallableStatement cstm, ResultSet rs) {
        try {
            if (rs != null) {
                rs.close();
            }
            if (cstm != null) {
                cstm.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
     public static ResultSet Consulta(String consulta){
        Connection con= getConecion();
        Statement declara;
        
        try{
            declara= con.createStatement();
            ResultSet respuesta = declara.executeQuery(consulta);
            return respuesta;
        }catch(SQLException e){
             JOptionPane.showMessageDialog(null,"No se pudo establecer la conexion"+e.getMessage(),"Error de Conexion",JOptionPane.ERROR_MESSAGE);
        }
        
        return null;
    }

}
