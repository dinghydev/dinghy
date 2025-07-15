import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DETECTOR = {
  _style:
    'shape=mxgraph.cisco.misc.detector;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 77,
  _height: 54,
}

export function Detector(props: DiagramNodeProps) {
  return <Shape {...DETECTOR} {...props} />
}
