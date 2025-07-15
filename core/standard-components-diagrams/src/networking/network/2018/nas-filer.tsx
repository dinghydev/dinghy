import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAS_FILER = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.nas_filer;',
  _width: 100,
  _height: 35,
}

export function NasFiler(props: DiagramNodeProps) {
  return <Shape {...NAS_FILER} {...props} />
}
