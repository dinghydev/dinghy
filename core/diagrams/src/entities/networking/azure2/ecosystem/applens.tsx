import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLENS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_ecosystem/Applens.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Applens(props: NodeProps) {
  return <Shape {...APPLENS} {...props} _style={extendStyle(APPLENS, props)} />
}
