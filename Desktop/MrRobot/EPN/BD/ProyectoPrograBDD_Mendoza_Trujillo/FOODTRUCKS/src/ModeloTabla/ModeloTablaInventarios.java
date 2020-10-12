/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ModeloTabla;


import foodtrucks.INVENTARIOS;
import java.util.ArrayList;
import java.util.List;
import javax.swing.table.AbstractTableModel;
/**
 *
 * @author USER
 */
public class ModeloTablaInventarios extends AbstractTableModel{
     
    String []columnas={"CodInv","Insumo","Existencias","Estado","FKIdAdmin"};
    public List<INVENTARIOS> inventario =new ArrayList<>();

    public ModeloTablaInventarios(List<INVENTARIOS> listaInv) {
       this.inventario= inventario;
    }
    
    
    
    
    @Override
      public String getColumnName(int column) {
         return columnas[column]; 
      }

    @Override
    public int getRowCount() {
        return inventario.size();
    }

    @Override
    public int getColumnCount() {
        return columnas.length; 
    }

    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        Object reap= null;
        if(columnIndex==0){
            reap= inventario.get(rowIndex).getCodInv();
        }else {
            if(columnIndex==1){
                reap= inventario.get(rowIndex).getInsumo();
                
            }else{
                if(columnIndex==2){
                    reap= inventario.get(rowIndex).getExistencias();
                }else{
                    reap=inventario.get(rowIndex).getFKIdAdmmin();
                    
                }
            }
        }
        return reap;
    }
    
}
