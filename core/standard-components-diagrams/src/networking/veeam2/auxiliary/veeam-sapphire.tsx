import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VEEAM_SAPPHIRE = {
  _style: {
    entity:
      'align=left;verticalAlign=middle;fontFamily=Tahoma;fillColor=#005f4b;strokeColor=none;fontColor=#ffffff;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  },
  _original_width: 150,
  _original_height: 110.00000000000001,
}

export function VeeamSapphire(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_SAPPHIRE}
      {...props}
      _style={extendStyle(VEEAM_SAPPHIRE, props)}
    />
  )
}
