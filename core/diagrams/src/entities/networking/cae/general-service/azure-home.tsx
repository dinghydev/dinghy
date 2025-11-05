import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_HOME = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Home.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function AzureHome(props: NodeProps) {
  return (
    <Shape {...AZURE_HOME} {...props} _style={extendStyle(AZURE_HOME, props)} />
  )
}
