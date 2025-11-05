import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWERSHELL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Powershell.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function Powershell(props: NodeProps) {
  return (
    <Shape {...POWERSHELL} {...props} _style={extendStyle(POWERSHELL, props)} />
  )
}
