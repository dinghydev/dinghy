import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CD_DVD = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/cd_dvd.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CdDvd(props: DiagramNodeProps) {
  return <Shape {...CD_DVD} {...props} _style={extendStyle(CD_DVD, props)} />
}
