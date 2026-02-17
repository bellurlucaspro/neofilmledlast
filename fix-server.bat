@echo off
echo ========================================
echo Nettoyage et redemarrage du serveur
echo ========================================
echo.

echo [1/3] Arret de tous les processus Node.js...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [2/3] Suppression du cache .next...
if exist .next (
    rmdir /s /q .next
    echo Cache supprime avec succes
) else (
    echo Pas de cache a supprimer
)
timeout /t 1 /nobreak >nul

echo [3/3] Demarrage du serveur...
echo.
echo Attendez que "Ready" s'affiche, puis ouvrez http://localhost:3000
echo.
npm run dev
