call npm run build || goto :error
cd dist || goto :error

git init || goto :error
git add -A || goto :error
git commit -m 'deploy' || goto :error

git push -f https://github.com/bt3103koala/test1.git master:gh-pages || goto :error

cd - || goto :error

:error

echo Failed with error #%errorlevel%

exit /b %errorlevel%