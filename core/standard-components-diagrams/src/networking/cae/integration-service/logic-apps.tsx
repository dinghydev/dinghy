import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_APPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Logic_Apps.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 39,
}

export function LogicApps(props: DiagramNodeProps) {
  return (
    <Shape {...LOGIC_APPS} {...props} _style={extendStyle(LOGIC_APPS, props)} />
  )
}
