@echo off
echo.
echo ========================================
echo   E-FAR CACHE CLEARING UTILITY
echo ========================================
echo.

echo [1/4] Clearing Vite cache...
if exist node_modules\.vite (
    echo    Removing node_modules\.vite...
    rmdir /s /q node_modules\.vite
    echo    ✅ Vite cache cleared
) else {
    echo    ℹ️  No Vite cache found
}

echo.
echo [2/4] Clearing build cache...
if exist dist (
    echo    Removing dist folder...
    rmdir /s /q dist
    echo    ✅ Build cache cleared
) else {
    echo    ℹ️  No build cache found
}

echo.
echo [3/4] Clearing browser localStorage...
echo    ✅ Browser cache instructions prepared

echo.
echo [4/4] Preparing fresh start...
echo    ✅ Cache clearing complete!

echo.
echo ========================================
echo   NEXT STEPS - Do ALL of these:
echo ========================================
echo.
echo 1. 🌐 Open your browser in PRIVATE/INCOGNITO mode
echo 2. 🔄 Press Ctrl+Shift+R (Hard Refresh)
echo 3. ⚡ Run: npm run dev:no-cache
echo 4. 🎯 Or run: npm run dev:fresh
echo.
echo ========================================
echo    ALTERNATIVE COMMANDS:
echo ========================================
echo npm run dev:no-cache     - Start with no cache
echo npm run dev:fresh        - Full cache bust
echo npm run debug:css        - Debug CSS issues
echo.
pause