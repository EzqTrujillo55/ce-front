/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package foodtrucks;

/**
 *
 * @author USER
 */
public class INVENTARIOS {
   int CodInv;
   String Insumo;
   int Existencias;
   int FKIdAdmmin;

    public INVENTARIOS() {
    }

    public INVENTARIOS(int CodInv, String Insumo, int Existencias, int FKIdAdmmin) {
        this.CodInv = CodInv;
        this.Insumo = Insumo;
        this.Existencias = Existencias;
        this.FKIdAdmmin = FKIdAdmmin;
    }

    public int getCodInv() {
        return CodInv;
    }

    public void setCodInv(int CodInv) {
        this.CodInv = CodInv;
    }

    public String getInsumo() {
        return Insumo;
    }

    public void setInsumo(String Insumo) {
        this.Insumo = Insumo;
    }

    public int getExistencias() {
        return Existencias;
    }

    public void setExistencias(int Existencias) {
        this.Existencias = Existencias;
    }

    public int getFKIdAdmmin() {
        return FKIdAdmmin;
    }

    public void setFKIdAdmmin(int FKIdAdmmin) {
        this.FKIdAdmmin = FKIdAdmmin;
    }
   
   
}
