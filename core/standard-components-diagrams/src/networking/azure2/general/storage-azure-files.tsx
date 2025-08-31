import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_AZURE_FILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Azure_Files.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 52,
}

export function StorageAzureFiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_AZURE_FILES}
      {...props}
      _style={extendStyle(STORAGE_AZURE_FILES, props)}
    />
  )
}
