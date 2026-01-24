# Get the current directory as the root folder
$rootFolder = Get-Location

# Function to recursively list files
function Get-FilesRecursive {
    param (
        [string]$path
    )

    Get-ChildItem -Path $path -Recurse | Where-Object {!$_.PSIsContainer -and $_.DirectoryName -ne ""} | ForEach-Object {
        [PSCustomObject]@{
            FolderName = $_.DirectoryName.Replace($path, "").Trim("\")
            FileName = $_.Name
        }
    }
}

# Get files recursively
$files = Get-FilesRecursive -path $rootFolder

# Filter out files with empty directory names
$filteredFiles = $files | Where-Object { $_.FolderName -ne "" }

# Convert to JSON
$jsonObject = $filteredFiles | ConvertTo-Json

# Save JSON object to a file
$jsonObject | Out-File -FilePath "files.json" -Encoding UTF8						     