import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGIC_APPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Logic_Apps.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 39,
}

export function LogicApps(props: NodeProps) {
  return (
    <Shape {...LOGIC_APPS} {...props} _style={extendStyle(LOGIC_APPS, props)} />
  )
}
