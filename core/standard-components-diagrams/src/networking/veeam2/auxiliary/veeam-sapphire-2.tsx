import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VEEAM_SAPPHIRE_2 = {
  _style: {
    entity:
      'align=left;verticalAlign=middle;fontFamily=Tahoma;fillColor=#df8c42;strokeColor=none;fontColor=#ffffff;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  },
  _original_width: 150,
  _original_height: 110.00000000000001,
}

export function VeeamSapphire2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_SAPPHIRE_2}
      {...props}
      _style={extendStyle(VEEAM_SAPPHIRE_2, props)}
    />
  )
}
