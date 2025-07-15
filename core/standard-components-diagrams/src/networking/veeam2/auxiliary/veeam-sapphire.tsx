import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_SAPPHIRE = {
  _style:
    'align=left;verticalAlign=middle;fontFamily=Tahoma;fillColor=#005f4b;strokeColor=none;fontColor=#ffffff;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  _width: 150,
  _height: 110.00000000000001,
}

export function VeeamSapphire(props: DiagramNodeProps) {
  return <Shape {...VEEAM_SAPPHIRE} {...props} />
}
