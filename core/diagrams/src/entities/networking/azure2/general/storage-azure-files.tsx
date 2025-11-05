import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_AZURE_FILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Azure_Files.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function StorageAzureFiles(props: NodeProps) {
  return (
    <Shape
      {...STORAGE_AZURE_FILES}
      {...props}
      _style={extendStyle(STORAGE_AZURE_FILES, props)}
    />
  )
}
