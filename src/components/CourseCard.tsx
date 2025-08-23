import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, Users, Play, BookOpen } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  progress?: number;
  totalLessons: number;
  completedLessons?: number;
  nextClass?: string;
  enrolled?: boolean;
  studentCount?: number;
  duration: string;
  thumbnail?: string;
  onEnroll?: () => void;
  onAccess?: () => void;
  onViewDetails?: () => void;
}

export const CourseCard = ({
  title,
  instructor,
  description,
  progress = 0,
  totalLessons,
  completedLessons = 0,
  nextClass,
  enrolled = false,
  studentCount,
  duration,
  onEnroll,
  onAccess,
  onViewDetails
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card-educational group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onViewDetails}
    >
      {/* Course Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">by {instructor}</p>
        </div>
        {enrolled && (
          <Badge variant="secondary" className="bg-success-lighter text-success font-medium">
            Enrolled
          </Badge>
        )}
      </div>

      {/* Course Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {/* Progress Bar (for enrolled courses) */}
      {enrolled && progress > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>
      )}

      {/* Next Class Info */}
      {enrolled && nextClass && (
        <div className="bg-primary-lighter rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Next Class</span>
          </div>
          <p className="text-sm text-primary mt-1">{nextClass}</p>
        </div>
      )}

      {/* Course Stats */}
      <div className="flex items-center gap-4 mb-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <BookOpen className="h-4 w-4" />
          <span className="text-sm">{totalLessons} lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{duration}</span>
        </div>
        {studentCount && (
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span className="text-sm">{studentCount} students</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        {enrolled ? (
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onAccess?.();
            }}
            className="flex-1 btn-hero"
          >
            <Play className="h-4 w-4 mr-2" />
            Continue Learning
          </Button>
        ) : (
          <>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                onAccess?.();
              }}
              variant="outline"
              className="flex-1"
            >
              <Play className="h-4 w-4 mr-2" />
              Try First Class
            </Button>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                onEnroll?.();
              }}
              className="btn-secondary"
            >
              Enroll Now
            </Button>
          </>
        )}
      </div>
    </div>
  );
};