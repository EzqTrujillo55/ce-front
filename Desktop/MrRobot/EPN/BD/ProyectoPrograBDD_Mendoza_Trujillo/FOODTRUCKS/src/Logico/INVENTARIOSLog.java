/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logico;

import DAO.INVENTARIOSDAO;
import foodtrucks.INVENTARIOS;

import java.util.List;

/**
 *
 * @author USER
 */
public class INVENTARIOSLog {
    
    INVENTARIOSDAO  inventarios = new INVENTARIOSDAO();
    
    
    public List<INVENTARIOS> listaInv (){
   return inventarios.listaInv();      
   }
}