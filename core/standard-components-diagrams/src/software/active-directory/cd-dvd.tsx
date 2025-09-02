import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CD_DVD = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/cd_dvd.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CdDvd(props: DiagramNodeProps) {
  return <Shape {...CD_DVD} {...props} _style={extendStyle(CD_DVD, props)} />
}
