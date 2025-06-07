# 📊 Exercise NgRX

Aplicación Angular que demuestra el uso de **NgRx** para gestionar el estado global de un contador, junto con la visualización de datos mediante **gráficos de líneas y barras** con Chart.js.

---

## 🧠 Tecnologías utilizadas

- [Angular](https://angular.io/)
- [NgRx Store](https://ngrx.io/guide/store)
- [Chart.js](https://www.chartjs.org/)

---

## 🚀 Funcionalidad

- ✅ Visualización de datos en gráfico de líneas y de barras.
- ✅ Gestión de estado global con NgRx Store.
- ✅ Contador global con:
  - Incremento de 5
  - Decremento de 5
  - Reset a 0
- ✅ Visualización en tiempo real del valor del contador.
- ✅ Estilos atractivos y adaptables a dispositivos móviles.

---

## ⚠️ Nota sobre `@ngrx/store` y versiones de Angular

Dependiendo de la versión de Angular que estés usando, es posible que el siguiente comando:

```bash
ng add @ngrx/store
```

genere un error como:

```
ERESOLVE unable to resolve dependency tree
```

Esto ocurre si estás usando una versión de Angular que no es compatible con la versión más reciente de NgRx.

### ✅ Solución recomendada

Instala la versión de NgRx que sea compatible con tu Angular. Por ejemplo, si usas Angular 18 (como es mi caso):

```bash
ng add @ngrx/store@18
```

---

## ▶️ Cómo ejecutar el proyecto

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/anggierz/exercise-ngrx.git
   cd exercise-ngrx
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   ng serve
   ```

4. **Abre en tu navegador**:
   ```
   http://localhost:4200
   ```

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── chart-bar/
│   │   │   └── chart-line/
│   │   ├── counter-value/
│   │   ├── counter-increment/
│   │   ├── counter-decrement/
│   │   └── counter-reset/
│   ├── store/
│   │   ├── counter.actions.ts
│   │   └── counter.reducer.ts
│   └── app.component.*
```
