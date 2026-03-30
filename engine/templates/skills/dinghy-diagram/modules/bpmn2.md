# Business, Bpmn2

## Containers

### containersBpmn2Choreographies

`import { ... } from '@dinghy/diagrams/containersBpmn2Choreographies'`

Bpmn2 — Choreographies

CallChoreographyCallingGlobal, ChoreographyTask

### containersBpmn2Tasks

`import { ... } from '@dinghy/diagrams/containersBpmn2Tasks'`

Bpmn2 — Tasks

AdHocCollapsed, AdHocExpanded, BusinessRule, BusinessRuleCallActivity,
CallActivity, CallActivityCollapsed, CallActivityExpanded, Compensation,
Compensation2, CompensationEventSubProcessInterruptingCollapsed,
ConditionalEventSubProcessInterruptingCollapsed,
ConditionalEventSubProcessNonInterruptingCollapsed,
ErrorEventSubProcessInterruptingCollapsed,
EscalationEventSubProcessInterruptingCollapsed,
EscalationEventSubProcessNonInterruptingCollapsed, GenericTask,
LoopAndCompensation, LoopAndCompensation2, Manual, ManualCallActivity,
MessageEventSubProcessInterruptingCollapsed,
MessageEventSubProcessNonInterruptingCollapsed, MultiInstanceParallel,
MultiInstanceParallel2, MultiInstanceSequential, MultiInstanceSequential2,
MultipleEventSubProcessInterruptingCollapsed,
MultipleEventSubProcessNonInterruptingCollapsed,
ParallelMultipleEventSubProcessInterruptingCollapsed,
ParallelMultipleEventSubProcessNonInterruptingCollapsed, Receive, Script,
ScriptCallActivity, Send, Service, SignalEventSubProcessInterruptingCollapsed,
SignalEventSubProcessNonInterruptingCollapsed, StandardLoop, StandardLoop2,
SubProcessCollapsed, TimerEventSubProcessInterruptingCollapsed,
TimerEventSubProcessNonInterruptingCollapsed, TransactionCollapsed,
TransactionExpanded, User, UserCallActivity

## Entities

### entitiesBpmn2Choreographies

`import { ... } from '@dinghy/diagrams/entitiesBpmn2Choreographies'`

Bpmn2 — Choreographies

AdditionalParticipantInitiating,
AdditionalParticipantInitiatingMultiInstanceBottom,
AdditionalParticipantNonInitiating,
AdditionalParticipantNonInitiatingMultiInstanceBottom,
ParticipantInitiatingBottom, ParticipantInitiatingBottomWithDecorator,
ParticipantInitiatingMultiInstanceBottom,
ParticipantInitiatingMultiInstanceBottomWithDecorator,
ParticipantInitiatingMultiInstanceTop, ParticipantInitiatingTop,
ParticipantInitiatingTopWithDecorator, ParticipantInitiatingTopWithDecorator2,
ParticipantInitiatingTopWithDecorator3, ParticipantNonInitiatingBottom,
ParticipantNonInitiatingMultiInstanceBottom,
ParticipantNonInitiatingMultiInstanceBottomWithDecorator,
ParticipantNonInitiatingMultiInstanceTop, ParticipantNonInitiatingTop,
ParticipantNonInitiatingTopWithDecorator

### entitiesBpmn2Events

`import { ... } from '@dinghy/diagrams/entitiesBpmn2Events'`

Bpmn2 — Events

CancelEnd, CancelIntermediateBoundaryInterrupting, CompensationEnd,
CompensationIntermediateBoundaryInterrupting, CompensationIntermediateThrowing,
CompensationStartInterrupting, ConditionalIntermediateBoundaryInterrupting,
ConditionalIntermediateBoundaryNonInterrupting, ConditionalIntermediateCatching,
ConditionalStartInterrupting, ConditionalStartNonInterrupting, End, ErrorEnd,
ErrorIntermediateBoundaryInterrupting, ErrorStartInterrupting, EscalationEnd,
EscalationIntermediateBoundaryInterrupting,
EscalationIntermediateBoundaryThrowing, EscalationIntermediateNonInterrupting,
EscalationStartInterrupting, EscalationStartNonInterrupting,
LinkIntermediateCatching, LinkIntermediateThrowing, MessageEnd,
MessageIntermediateBoundaryInterrupting,
MessageIntermediateBoundaryNonInterrupting, MessageIntermediateCatching,
MessageIntermediateThrowing, MessageStartInterrupting,
MessageStartNonInterrupting, MultipleEnd,
MultipleIntermediateBoundaryInterrupting,
MultipleIntermediateBoundaryNonInterrupting, MultipleIntermediateCatching,
MultipleIntermediateThrowing, MultipleStartInterrupting,
MultipleStartNonInterrupting, NoneIntermediateThrowing, NoneStart,
ParallelMultipleIntermediateBoundaryInterrupting,
ParallelMultipleIntermediateBoundaryNonInterrupting,
ParallelMultipleIntermediateCatching, ParallelMultipleStartInterrupting,
ParallelMultipleStartNonInterrupting, SignalEnd,
SignalIntermediateBoundaryInterrupting,
SignalIntermediateBoundaryNonInterrupting, SignalIntermediateCatching,
SignalIntermediateThrowing, SignalStartInterrupting, SignalStartNonInterrupting,
Terminate, TimerIntermediateBoundaryInterrupting,
TimerIntermediateBoundaryNonInterrupting, TimerIntermediateCatching,
TimerStartInterrupting, TimerStartNonInterrupting

### entitiesBpmn2Gateways

`import { ... } from '@dinghy/diagrams/entitiesBpmn2Gateways'`

Bpmn2 — Gateways

CancelBoundaryInterrupting, CancelEnd, CompensationInterrupting,
CompensationThrowing, CompensationBoundaryInterrupting, CompensationEnd,
Complex, Conditional, ConditionalCatching, ConditionalInterrupting,
ConditionalNonInterrupting, ConditionalBoundaryInterrupting,
ConditionalBoundaryNonInterrupting, ErrorEnd, ErrorInterrupting,
ErrorBoundaryInterrupting, EscalationInterrupting, EscalationNonInterrupting,
EscalationThrowing, EscalationBoundaryInterrupting,
EscalationBoundaryNonInterrupting, EscalationEnd, Exclusive, Exclusive2,
Inclusive, Intermediate, LinkCatching, LinkThrowing, Message, MessageCatching,
MessageInterrupting, MessageNonInterrupting, MessageThrowing,
MessageBoundaryInterrupting, MessageBoundaryNonInterrupting, MessageEnd,
Multiple, MultipleCatching, MultipleInterrupting, MultipleNonInterrupting,
MultipleThrowing, MultipleBoundaryInterrupting, MultipleBoundaryNonInterrupting,
MultipleEnd, MultipleStart, Parallel, ParallelMultiple,
ParallelMultipleCatching, ParallelMultipleInterrupting,
ParallelMultipleNonInterrupting, ParallelMultipleBoundaryInterrupting,
ParallelMultipleBoundaryNonInterrupting, Signal, SignalCatching,
SignalInterrupting, SignalNonInterrupting, SignalThrowing,
SignalBoundaryInterrupting, SignalBoundaryNonInterrupting, SignalEnd, Start,
Terminate, Timer, TimerCatching, TimerInterrupting, TimerNonInterrupting,
TimerBoundaryInterrupting, TimerBoundaryNonInterrupting

### entitiesBpmn2General

`import { ... } from '@dinghy/diagrams/entitiesBpmn2General'`

Bpmn2 — General

Annotation, CallConversation, CallSubConversation, Conversation,
CrossFunctionalFlowchart, DataInput, DataInputCollection, DataObject,
DataObject2, DataObjectCollection, DataOutput, DataOutputCollection, DataStore,
Group, HorizontalLane, HorizontalLane2, HorizontalLane3, HorizontalPool1,
HorizontalPool2, HorizontalSwimlane, SubConversation, TextAnnotation,
VerticalLane, VerticalLane2, VerticalLane3, VerticalPool1, VerticalPool2,
VerticalSwimlane

### entitiesBpmn2Tasks

`import { ... } from '@dinghy/diagrams/entitiesBpmn2Tasks'`

Bpmn2 — Tasks

EventSubProcessExpanded

## Dependencies

### dependenciesBpmn2General

`import { ... } from '@dinghy/diagrams/dependenciesBpmn2General'`

Bpmn2 — General

Association, BiDirectionalAssociation, ConditionalSequenceFlow,
ConversationLink, DefaultSequenceFlow, DirectionalDirectedDataAssociation,
MessageFlow, SequenceFlow
