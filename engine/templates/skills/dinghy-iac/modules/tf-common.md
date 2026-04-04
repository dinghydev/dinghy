# Common

`import { ... } from '@dinghy/tf-common'`

Provider-agnostic components for outputs, backends, local files, and archives.

## BackendOutputs

**Props:** `outputProtocolPrefix`, `outputFilePrefix`, `outputFileExt`,
`component`

## Output

**Hooks:** `useOutput()`, `useOutputs()`

**Props:** `value`, `description`, `sensitive`, `ephemeral`, `precondition`

## LocalBackendOutputs

## LocalBackend

**Hooks:** `useLocalBackend()`

**Props:** `path`

## LocalFile

**Hooks:** `useLocalFile()`, `useLocalFiles()`

**Props:** `filename`, `content`, `content_base64`, `directory_permission`,
`file_permission`, `sensitive_content`, `source`

## Backend

**Hooks:** `useBackend()`, `useBackends()`

**Props:** `alias`, `type`

## DataArchiveFile

**Hooks:** `useDataArchiveFile()`, `useDataArchiveFiles()`

**Props:** `output_path`, `type`, `exclude_symlink_directories`, `excludes`,
`output_file_mode`, `source`

## ArchiveFile

**Hooks:** `useArchiveFile()`, `useArchiveFiles()`

**Props:** `output_path`, `type`, `exclude_symlink_directories`, `excludes`,
`output_file_mode`, `source`
