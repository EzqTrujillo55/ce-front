/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import DAO.Conexion;
import foodtrucks.INVENTARIOS;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


/**
 *
 * @author USER
 */
public class INVENTARIOSDAO {
    Conexion conexion= new Conexion();
    
    public List<INVENTARIOS> listaInv(){
        Connection conec=null;
        CallableStatement callable= null;
        ResultSet res= null;
        List<INVENTARIOS> lista= null;
        
        try{
         lista=new ArrayList<>();
         conec= conexion.getConecion(); 
         callable=conec.prepareCall("{Call listarInv}");
         res=callable.executeQuery();
         INVENTARIOS inv=null;
         while(res.next()){
             inv=new INVENTARIOS();
             inv.setCodInv(res.getInt("CodInv"));
             inv.setInsumo(res.getString("Insumo"));
             inv.setExistencias(res.getInt("Existencias"));
             inv.getFKIdAdmmin();
         }
     } catch(Exception e){
         e.printStackTrace();
     }   
      return lista;  
    } 
}
