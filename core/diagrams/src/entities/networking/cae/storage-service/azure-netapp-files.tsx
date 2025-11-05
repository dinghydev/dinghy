import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_NETAPP_FILES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_NetApp_files.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function AzureNetappFiles(props: NodeProps) {
  return (
    <Shape
      {...AZURE_NETAPP_FILES}
      {...props}
      _style={extendStyle(AZURE_NETAPP_FILES, props)}
    />
  )
}
